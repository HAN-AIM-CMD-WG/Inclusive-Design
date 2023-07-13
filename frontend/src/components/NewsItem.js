/* eslint-disable react/prop-types */
import React from 'react'

const NewsItem = ({ news }) => {
  return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-36 w-full object-cover" src={news.thumbnail} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            Article
                        </a>
                    </p>
                    <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                            {news.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                            {news.content.substring(0, 150)}...
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <span className="sr-only">News Date</span>
                            <p className="text-sm text-gray-500">{news.date}</p>
                        </a>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                                Read full story
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NewsItem
