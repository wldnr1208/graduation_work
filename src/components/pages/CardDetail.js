// src/components/CardDetail.js
import React, { useState, useEffect, useCallback } from "react";
import { useAddBid } from "../../hooks/useBids";
import { db } from "../../api/firebase";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styled from "styled-components";

const CardDetail = () => {
  const { cardId } = useParams(); // useParams로 cardId 가져오기
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState("");
  const [bids, setBids] = useState([]); // 입찰 데이터 상태
  const addBidMutation = useAddBid(cardId);

  // Firestore에서 입찰 데이터 가져오기 함수
  const fetchBidData = useCallback(async () => {
    if (!cardId) {
      console.error("유효하지 않은 cardId:", cardId);
      return;
    }

    try {
      const docRef = doc(db, "cards", cardId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("입찰 데이터:", data);
        setBids(data.bids || []); // 입찰 데이터 설정
      } else {
        console.log("입찰 데이터가 없습니다. 새 문서를 생성합니다.");
        await setDoc(docRef, { bids: [] });
        setBids([]); // 빈 입찰 데이터로 초기화
      }
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  }, [cardId]);

  // 컴포넌트가 처음 렌더링될 때 입찰 데이터 가져오기
  useEffect(() => {
    fetchBidData();
  }, [fetchBidData]);

  const handleBidSubmit = (e) => {
    e.preventDefault();

    // 필드 값 유효성 검사
    if (!nickname || !amount) {
      alert("닉네임과 입찰 금액을 모두 입력해주세요.");
      return;
    }

    // Firestore에 추가할 입찰 데이터 구성
    const bid = {
      amount: Number(amount), // 금액을 숫자로 변환
      bidder: nickname,
    };

    // Firestore에 입찰 데이터 추가
    addBidMutation.mutate(bid, {
      onSuccess: () => {
        setNickname("");
        setAmount("");
        fetchBidData(); // 입찰 등록 후 입찰 데이터 다시 가져오기
      },
      onError: (error) => {
        console.error("입찰 등록 중 오류 발생:", error);
        alert("입찰 등록에 실패했습니다. 다시 시도해주세요.");
      },
    });
  };

  return (
    <Container>
      <Form onSubmit={handleBidSubmit}>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
          required
        />
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="입찰 금액"
          required
        />
        <Button type="submit" disabled={addBidMutation.isLoading}>
          입찰하기
        </Button>
      </Form>

      {addBidMutation.isError && (
        <ErrorText>오류가 발생했습니다. 다시 시도해주세요.</ErrorText>
      )}
      {addBidMutation.isSuccess && (
        <SuccessText>입찰이 성공적으로 등록되었습니다!</SuccessText>
      )}

      <BidList>
        {bids.map((bid, index) => (
          <BidItem key={index}>
            <strong>{bid.bidder}</strong>: {bid.amount}원
          </BidItem>
        ))}
      </BidList>
    </Container>
  );
};

export default CardDetail;

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;

const SuccessText = styled.p`
  color: green;
  margin-top: 10px;
`;

const BidList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
`;

const BidItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
`;
