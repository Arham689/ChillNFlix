import React from 'react'
import botAvatar from '../assets/botAvatar.jpeg'
const comments = [
    {
        name : 'coder',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        replies : [
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : [
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : []
                    },
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : []
                    },
                ]
            },
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : [
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : []
                    },
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : [
                            {
                                name : 'coder',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                replies : []
                            },
                            {
                                name : 'coder',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                replies : [
                                    {
                                        name : 'coder',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                        replies : []
                                    },
                                    {
                                        name : 'coder',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                        replies : [
                                            {
                                                name : 'coder',
                                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                                replies : []
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },

                ]
            },
        ]
    },
    {
        name : 'coder',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        replies : []
    },
    {
        name : 'coder',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        replies : [
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : []
            },
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : [{
                    name : 'coder',
                    text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                    replies : []
                },]
            },
        ]
    },
    {
        name : 'coder',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        replies : [
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : []
            },
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : [
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : []
                    },
                    {
                        name : 'coder',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                        replies : [
                            {
                                name : 'coder',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                                replies : []
                            },
                        ]
                    },

                ]
            },
            {
                name : 'coder',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
                replies : []
            },
        ]
    },
]

const Singlecomment = ({data})=>{
    return <div className='flex p-3'>
        <div className='w-11 rounded-xl mr-3'>
            <img src={botAvatar} alt="" />
        </div>
        <div>
            <p>{data.name}</p>
            <p>{data.text}</p>
        </div>
    </div>
}

const CommentsList = ({comments}) => {
    return <>
        {
            comments.map((comment,index)=>(
            <div key={index} >
            
            <Singlecomment data = {comment}/>
            <div className='px-5 mx-3 border-l-2'>
                <CommentsList comments = {comment.replies}/>
            </div>
            </div>
            ))
        }
    </>
}
const YTCommentsContainer = () => {
  return (
    <>
     <div className=' text-2xl mb-4'>
      comments
    </div>
    <CommentsList comments={comments}/>
    </>
   
  )
}

export default YTCommentsContainer
