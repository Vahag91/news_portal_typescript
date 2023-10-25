import React from 'react'
import Header from '../Header'
import NewsCard from '../NewsCard'
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NewsCard
        id={2}
        title="First News"
        content='First news content text'
        image='https://images.unsplash.com/photo-1631771970274-d7f0442bd28b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80'
        publishDate={(new Date()).toDateString()}
      />
    </div>
  )
}
export default App