import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'

const style = {
  width: 300,
  textAlign: "center",

}
const Container = () => {
  
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'What is 2 + 2?',
      },
      {
        id: 2,
        text: 'What do chickens lay?',
      },
      {
        id: 3,
        text: 'What is the Capital of Maryland?',
      },
      {
        id: 4,
        text: 'What is 4 - 2?',
      },
      {
        id: 5,
        text:
          'Head, shoulders, knees, and ____.',
      },
      {
        id: 6,
        text: 'How low can you go?',
      },
      {
        id: 7,
        text: 'Anna Wintour?',
      },
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  
}
export default Container
