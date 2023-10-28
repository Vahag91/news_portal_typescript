import React from 'react'
import Header from '../Header'
import NewsList from '../NewsList/NewsList'

const App: React.FC = () => {



  const news = [
    {
      id: 1,
      title: 'New title 1',
      content: 'News Content 1',
      image: 'https://images.unsplash.com/photo-1631771970274-d7f0442bd28b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80',
      publishDate: (new Date().toDateString())
    },
    {
      id: 2,
      title: 'New title 2',
      content: 'News Content 2',
      image: 'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
      publishDate: (new Date().toDateString())
    },
    {
      id: 3,
      title: 'New title 3',
      content: 'News Content 3',
      image: 'https://yourblogworks.com/wp-content/uploads/2016/07/Free-images-1024x683.jpg',
      publishDate: (new Date().toDateString())
    },
    {
      id: 4,
      title: 'New title 4',
      content: 'News Content 4',
      image: 'https://img.freepik.com/premium-photo/hand-holding-camera-dslr-travel-river-sunset-holiday-travel-vintage_10541-1063.jpg',
      publishDate: (new Date().toDateString())
    }
  ]

  const searchAutocomplite = [
    {
        text: "Application",
        rating: 0.7
    },
    {
        text: "Tenacity",
        rating: 0.1
    },
    {
        text: "Rage",
        rating: 0.8
    },
    {
        text: "Input",
        rating: 0.4
    },
    {
        text: "Service",
        rating: 0.3
    },
    {

        text: "Notebook",
        rating: 0.9
    },
    {
        text: "React",
        rating: 0.5
    },
    {
        text: "Angular",
        rating: 0.6
    },
    {
        text: "Javascript",
        rating: 0.2
    },
    {
        text: "Typescript",
        rating: 0.2
    }
]

  return (
    <div>
      <Header searchAutocomplite={searchAutocomplite}/>
      <NewsList news={news} />
    </div>
  )
}
export default App