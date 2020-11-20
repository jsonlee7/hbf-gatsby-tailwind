import React from "react"
import "../css/dist/tailwind.css"
import ReviewsAverage from "../reviews/reviews-average"
import ReviewsList from "../reviews/reviews-list"

export default function Home() {
  return (
    <div className="mx-96 mt-24">
      <ReviewsAverage />
      <ReviewsList />
    </div>
  )
}
