import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/transactions`)
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  }, []);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Balance</h5>
              <p className="card-text fs-4">€ {balance.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title">Ingresos</h5>
              <p className="card-text fs-4 text-success">
                € {income.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-danger">
            <div className="card-body">
              <h5 className="card-title">Gastos</h5>
              <p className="card-text fs-4 text-danger">
                € {expense.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-3">Últimas transacciones</h2>

        <div className="list-group">
          {transactions.slice(0, 5).map(t => (
            <div
              key={t.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{t.description}</strong>
                <br />
                <small className="text-muted">{t.category}</small>
              </div>

              <span
                className={
                  t.type === "income" ? "text-success fw-bold" : "text-danger fw-bold"
                }
              >
                {t.type === "income" ? "+" : "-"}€{t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};