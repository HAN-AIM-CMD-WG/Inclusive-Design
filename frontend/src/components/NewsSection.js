import React from 'react'
import NewsItem from './NewsItem'

const NewsSection = () => {
  const newsData = [
    {
      title: 'First News',
      content: 'This is the content of the first news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Second News',
      content: 'This is the content of the second news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Third News',
      content: 'This is the content of the third news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Fourth News',
      content: 'This is the content of the fourth news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Fifth News',
      content: 'This is the content of the fifth news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Sixth News',
      content: 'This is the content of the sixth news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Seventh News',
      content: 'This is the content of the seventh news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    },
    {
      title: 'Eighth News',
      content: 'This is the content of the eighth news...',
      date: '2023-07-12',
      thumbnail: 'https://i.imgur.com/x6flZbo.jpeg'
    }

    // More news data...
  ]

  return (
        <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pink-600">
                    Latest News
                </h2>
                <div className="mt-12">
                    <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
                        {newsData.map((news, index) => (
                            <NewsItem key={index} news={news} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NewsSection
