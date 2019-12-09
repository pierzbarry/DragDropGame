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
        id: 8,
        text: '4',
      },
      {
        id: 9,
        text: 'Eggs',
      },
      {
        id: 10,
        text: 'Annapolis',
      },
      {
        id: 11,
        text: '2',
      },
      {
        id: 12,
        text:
          'Toes',
      },
      {
        id: 13,
        text: 'Low!',
      },
      {
        id: 14,
        text: 'YES!',
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
