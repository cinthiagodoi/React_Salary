/* eslint-disable use-isnan */
import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import { calculateSalaryFrom } from "../../SalaryCalculation";

import "./styles.css";

function Calculator() {
  const [salary, setSalary] = useState("");
  const {
    baseINSS,
    discountINSS,
    baseIRPF,
    discountIRPF,
    netSalary,
  } = calculateSalaryFrom(salary);

  const percentualValue = (value) => {
    let count = ((value * 100) / salary).toFixed(2);
    if (netSalary === 0) {
      count = 0;
    }
    return count;
  };

  return (
    <div id="page-calculator">
      <h1>React Salários</h1>
      <fieldset>
        <div className="field">
          <label className="field-label" htmlFor="salary">
            Salário Bruto
          </label>
          <input
            type="number"
            name="salary"
            id="salaryInput"
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
        </div>

        <div id="calculations-field" className="float-container">
          <label htmlFor="inssBase">Base INSS</label>
          <input
            type="text"
            name="inssBase"
            value={`R$ ${baseINSS}`}
            readOnly
          />

          <label htmlFor="inssDiscount">Desconto INSS</label>
          <input
            type="text"
            className="inssDiscount"
            name="inssDiscount"
            value={`R$ ${discountINSS}`}
            readOnly
          />

          <label htmlFor="irpfBase">Base IRPF</label>
          <input
            type="text"
            name="irpfBase"
            value={`R$ ${baseIRPF}`}
            readOnly
          />

          <label htmlFor="irpfDiscount">Desconto IRPF</label>
          <input
            type="text"
            name="irpfDiscount"
            className="irpfDiscount"
            value={`R$ ${discountIRPF}`}
            readOnly
          />
        </div>

        <div id="total-field" className="float-container">
          <label for="floatField">Salário Liquido</label>
          <input
            id="floatField"
            type="text"
            name="total"
            value={`R$ ${netSalary.toFixed(2)}  (%${percentualValue(
              netSalary
            )})`}
            readOnly
          />
        </div>
      </fieldset>

      <ProgressBar className="text-center">
        <ProgressBar
          variant="warning"
          now={percentualValue(discountINSS)}
          key={2}
        />
        <ProgressBar
          striped
          variant="danger"
          now={percentualValue(discountIRPF)}
          key={1}
        />
        <ProgressBar
          striped
          variant="success"
          now={percentualValue(netSalary)}
          key={3}
        />
      </ProgressBar>
    </div>
  );
}

export default Calculator;
