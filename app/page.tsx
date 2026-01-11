"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";
import type { MCQ, Section } from "@/data/mcqs";
import { sections } from "@/data/mcqs";

type DifficultyFilter = "all" | "easy" | "medium" | "hard";

const difficultyLabels: Record<DifficultyFilter, string> = {
  all: "All Difficulties",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

type AnswerState = Record<
  string,
  {
    choiceId: string;
    isCorrect: boolean;
  }
>;

const totalQuestionCount = sections.reduce(
  (acc, section) => acc + section.questions.length,
  0,
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [answers, setAnswers] = useState<AnswerState>({});

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredSections = useMemo(() => {
    const matchesSearch = (section: Section, question: MCQ) => {
      if (!normalizedSearch) {
        return true;
      }

      const haystack = [
        section.title,
        section.description,
        section.focus.join(" "),
        question.question,
        question.explanation,
        ...question.choices.map((choice) => choice.text),
        question.reference ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedSearch);
    };

    return sections
      .map((section) => ({
        ...section,
        questions: section.questions.filter((question) => {
          const difficultyMatch =
            difficulty === "all" || question.difficulty === difficulty;

          return difficultyMatch && matchesSearch(section, question);
        }),
      }))
      .filter((section) => section.questions.length > 0);
  }, [difficulty, normalizedSearch]);

  const filteredQuestionCount = filteredSections.reduce(
    (acc, section) => acc + section.questions.length,
    0,
  );

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(
    (answer) => answer.isCorrect,
  ).length;

  const handleSelect = (question: MCQ, choiceId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: {
        choiceId,
        isCorrect: choiceId === question.answerId,
      },
    }));
  };

  const handleResetQuestion = (questionId: string) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const handleResetAll = () => {
    setAnswers({});
    setSearchTerm("");
    setDifficulty("all");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.badgeBar}>
            <span className={styles.badge}>Agent Factory Playbook</span>
            <span className={styles.badge}>
              {totalQuestionCount} curated MCQs
            </span>
            <span className={styles.badge}>
              {correctCount}/{answeredCount} correct
            </span>
          </div>
          <h1 className={styles.heroTitle}>
            Agent Factory Knowledge Check
          </h1>
          <p className={styles.heroSubtitle}>
            Explore exam-style questions distilled from the “Agent Factory:
            Building Digital Full-Time Equivalents” presentation. Search, filter
            by difficulty, and test your command of spec-driven agentic AI.
          </p>
        </header>

        <section className={styles.panel}>
          <div className={styles.filters}>
            <div className={styles.search}>
              <input
                type="search"
                placeholder="Search questions, keywords, or slide themes…"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search MCQs"
              />
            </div>
            <div className={styles.pillGroup}>
              {(Object.keys(difficultyLabels) as DifficultyFilter[]).map(
                (filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`${styles.pill} ${
                      difficulty === filter ? styles.pillActive : ""
                    }`}
                    onClick={() => setDifficulty(filter)}
                    aria-pressed={difficulty === filter}
                  >
                    {difficultyLabels[filter]}
                  </button>
                ),
              )}
            </div>
            <button
              type="button"
              className={`${styles.pill} ${styles.pillActive}`}
              onClick={handleResetAll}
            >
              Reset Filters &amp; Progress
            </button>
          </div>
          <p className={styles.sectionDescription}>
            Showing {filteredQuestionCount} of {totalQuestionCount} questions.
            Answered {answeredCount} with {correctCount} correct. Use the
            filters to drill into specific themes or difficulty levels.
          </p>
        </section>

        {filteredSections.length === 0 ? (
          <div className={styles.emptyState}>
            No questions match your current filters. Try adjusting the search
            term or difficulty.
          </div>
        ) : (
          filteredSections.map((section) => (
            <article className={styles.sectionCard} key={section.id}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionDescription}>
                  {section.description}
                </p>
                <div className={styles.focusTags}>
                  {section.focus.map((item) => (
                    <span className={styles.focusTag} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </header>
              <div className={styles.questionList}>
                {section.questions.map((question) => {
                  const selection = answers[question.id];
                  const isAnswered = Boolean(selection);
                  return (
                    <div className={styles.questionCard} key={question.id}>
                      <div className={styles.questionHeader}>
                        <p className={styles.questionTitle}>
                          {question.question}
                        </p>
                        <span className={styles.badgeDifficulty}>
                          {question.difficulty}
                        </span>
                      </div>
                      <div className={styles.choiceList}>
                        {question.choices.map((choice) => {
                          const isCorrectChoice =
                            isAnswered && choice.id === question.answerId;
                          const isSelectedChoice =
                            selection?.choiceId === choice.id;

                          let choiceClassName = styles.choiceButton;
                          if (isAnswered) {
                            if (isCorrectChoice) {
                              choiceClassName += ` ${styles.choiceCorrect}`;
                            } else if (isSelectedChoice) {
                              choiceClassName += ` ${styles.choiceIncorrect}`;
                            }
                          }

                          return (
                            <button
                              key={choice.id}
                              type="button"
                              className={choiceClassName}
                              onClick={() =>
                                handleSelect(question, choice.id)
                              }
                              disabled={isAnswered}
                            >
                              <strong>{choice.id.toUpperCase()}.</strong>{" "}
                              {choice.text}
                            </button>
                          );
                        })}
                      </div>
                      {isAnswered ? (
                        <div>
                          <div className={styles.explanation}>
                            <strong>Explanation:</strong> {question.explanation}
                            {question.reference ? (
                              <div className={styles.reference}>
                                Source: {question.reference}
                              </div>
                            ) : null}
                          </div>
                          <div className={styles.badgeBar}>
                            <button
                              type="button"
                              className={styles.pill}
                              onClick={() =>
                                handleResetQuestion(question.id)
                              }
                            >
                              Retry question
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
