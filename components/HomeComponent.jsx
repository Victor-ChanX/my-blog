'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import {CalendarDaysIcon, ChatBubbleLeftRightIcon, HomeModernIcon, SparklesIcon} from '@heroicons/react/24/solid'
import fetchWrapper from '/lib/request'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const HomeComponent = () => {
  // articleList
  const [articles, setArticle] = useState([])
  const [personalInformation, setPersonalInformation] = useState({attributes: []})
  // currentState
  const [currentPage, setCurrentPage] = useState(1)
  // pagesSize
  const [pages, setPagesSize] = useState(5)

  // 修改时间格式
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  }

  useEffect(() => {
    fetchWrapper.get('article/ArticleList/')
      .then(data => {
        console.log(data);
        setArticle(data.results);
      })
      .catch(error => {
        console.error(error);
      });

    fetchWrapper.get('users/UserInfoViewSet/?id=1')
      .then(data => {
        console.log(data);
        setPersonalInformation(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={'flex flex-row justify-center'}>
      <div
        className={'mr-10 mt-10 ml-20 h-96 flex flex-col w-80 bg-gray-50 text-black p-4 items-center shadow-xl space-y-4 rounded-lg hover:shadow-2xl'}>
        <Image src='/my.png' alt='my' width={200} height={200} className={'rounded-full h-40 w-40'}/>
        {/*<div className={'text-lg font-bold'}>{personalInformation.englishName}</div>*/}
        <div className={'text-lg font-bold'}>{personalInformation.name}</div>
        <div className={'text-sm flex items-center space-x-1'}>
          <ChatBubbleLeftRightIcon className={'w-3 h-3 '}/>
          <div>{personalInformation.email}</div>
        </div>
        <div className={'text-sm flex items-center space-x-1'}>
          <HomeModernIcon className={'w-3 h-3 '}/>
          <div>{personalInformation.base}</div>
        </div>

        <div className={'flex space-x-10 text-sm'}>
          <HoverCard>
            <HoverCardTrigger>
              <Image src='/wechat.png' alt='wechat' width={200} height={200} className={'h-8 w-8'}></Image>
            </HoverCardTrigger>
            <HoverCardContent>
              {personalInformation.wechat}
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Image src='/whatsapp.png' alt='whatsapp' width={200} height={200} className={'h-8 w-8'}></Image>
            </HoverCardTrigger>
            <HoverCardContent>
              {personalInformation.whatsapp}
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Image src='/github.png' alt='github' width={200} height={200} className={'h-8 w-8'}></Image>
            </HoverCardTrigger>
            <HoverCardContent>
              {personalInformation.github}
            </HoverCardContent>
          </HoverCard>

        </div>
      </div>

      <ArticlesList articles={articles} formatDate={formatDate}/>
      <Special/>

    </div>
  );
};


const ArticlesList = (props) => {
  return (
    <div className='flex flex-col mr-10 mt-10'>
      {props.articles.map(item => (
        <div key={item.id}
             className={'space-y-3 p-10 mt-5 first:mt-0  w-144 bg-gray-50 text-black  h-auto rounded-lg shadow-xl hover:shadow-2xl '}>
          <div className={'text-blue-300 font-bold text-xl'}>{item.title}</div>
          <div className={'flex space-x-3 text-sm text-gray-400'}>
            <div className={'flex items-center'}>
              <CalendarDaysIcon className={'w-4 h-5'}/>
              {props.formatDate(item.created_at)}
            </div>
            <div className={'flex items-center text-sm'}>
              <SparklesIcon className={'w-4 h-5'}/>
              {props.formatDate(item.updated_at)}
            </div>
          </div>
          <div className={'text-sm'}>{item.content}</div>
        </div>
      ))}

    </div>
  )
}

const Special = (props) => {
  return (
    <div className={'w-80 h-96 mt-10 bg-gray-50 text-black mr-20 rounded-lg shadow-xl hover:shadow-2xl'}>测试</div>
  )
}

export default HomeComponent;
