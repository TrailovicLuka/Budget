import React from "react";
import styled from "styled-components";

function Head() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let mY = new Date();
  let monthName = months[mY.getMonth()];
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div>
      <Wrap>
        <BlockHeader className="d-flex">
          <div className="pt-3 pb-3 top-date">
            Available Budget in {monthName} {date}
          </div>
          <div id="money-count">
            <h1>+2,850.00</h1>
          </div>
          <div className="income-top mt-3 ">
            <div>Income</div>

            <div>+9,500.00</div>
          </div>
          <div className="expenses-top mt-3">
            <div>Expenses</div>

            <div>-6,650.00</div>
          </div>
        </BlockHeader>

        <ImageHeader src="/img/header-budget.png" />
      </Wrap>
    </div>
  );
}

export default Head;

const Wrap = styled.div`
  height: 280px;
  background: rgb(152, 74, 22);
  background: radial-gradient(
    circle,
    rgba(152, 74, 22, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const ImageHeader = styled.img`
  width: 300px;
  position: fixed;
  right: 20px;
  top: 0;
  padding-bottom: 50px;
  z-index: 0;
`;
const BlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  color: white;
  z-index: 10;
`;
