import React from "react";
import styled from "styled-components";

import { Order } from "../../services/types";

interface CardProps {
  order: Order;
}

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 12rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const CardHeader = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.div`
  font-size: 1rem;
  height: 3rem;
  margin-bottom: 0.8rem;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
`;

const TableData = styled.td`
  padding: 0.25rem;
`;

const Card: React.FC<CardProps> = ({ order }) => {
  return (
    <CardContainer>
      <CardHeader>Order#{order.id}</CardHeader>
      <Description>{order.description}</Description>
      <Table>
        <tbody>
            <tr>
              <TableData>Order Type:</TableData>
              <TableData>{order.order_type}</TableData>
            </tr>
            <tr>
              <TableData>Payment Status:</TableData>
              <TableData>{order.payment_status}</TableData>
            </tr>
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default Card;

