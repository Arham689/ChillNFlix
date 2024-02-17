import React from 'react'

const YTSuggetion = ({listItem , setTerm , OnClickOfsuggstion}) => {
    const HandleClick = ()=>{
        OnClickOfsuggstion(listItem)
        setTerm(listItem)
    }
  return (
    <div onClick={HandleClick}  
        className=' cursor-pointer m-2 pl-1 hover:bg-[#696969] pb-6 text-white h-5'>
      {listItem}
    </div>
  )
}

export default YTSuggetion
