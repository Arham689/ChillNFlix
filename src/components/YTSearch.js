import React, {  useRef, useState } from 'react'
import YTSuggetion from './YTSuggetion'
import useGetSuggetions from '../Hooks/useGetSuggetions'
import { Link, useNavigate } from 'react-router-dom'
const YTSearch = () => {
  const qury = useRef()
  // const [suggetions, setSuggetions] = useState([])
  const navigate = useNavigate()
  const [term, setTerm] = useState('')
  const [isSuggetionsVisible , setIsSuggetionsVisible] = useState(false)
  const HandelSearch = (e) => {
    e.preventDefault()
    if(term === '') return null
    navigate('/searchpage' , { state: { term: term } })
  }
  const HandelInputField = () => {
    setTerm(qury.current.value)
    // console.log(term);
  }
  const suggetions = useGetSuggetions(term)
  // console.log(suggetions);
  // setSuggetions(useGetSuggetions(term))

  const OnClickOfsuggstion = (item)=>{
    qury.current.value = item
  }

  const HandelBlur = ()=>{
    setTimeout(() => {
      setIsSuggetionsVisible(false)
    }, 100);
  }

  return (
    <div className=' pt-5'>
      <form action="">
        <div className='flex w-32 sm:w-96 items-center justify-center '>
          <input 
          onChange={HandelInputField} 
          onFocus={()=>{setIsSuggetionsVisible(true)}}
          onBlur={HandelBlur} // i want to delay this handelr so i use set time out 
          ref={qury} className='w-32 h-11 sm:w-96  appearance-none p-4 text-white focus:outline-none focus:border-blue-500 bg-black border rounded-s-3xl border-[#4d4d4d]  blur:border-red-500"' type="text" />
          <button onClick={HandelSearch} className='h-11 appearance-none w-14 border border-l-0 focus:outline-none bg-[#2a2a2a] border-[#4d4d4d] p-[11px] rounded-e-3xl cursor-pointer'><svg className=" h-5 w-5 svg-icon search-icon " aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title"></title><desc id="desc"></desc><g className="search-path" fill="none" stroke="#fff"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg></button>
        </div>
      </form>
      {(isSuggetionsVisible && suggetions.length !== 0) && <div className=' fixed rounded-lg bg-[#2b2b2b] left-0 sm:left-auto p-2 z-50 w-screen sm:w-96 '>
        {suggetions?.map(item => <Link key={item} to={'/searchpage'} state = {{term : item}}><YTSuggetion OnClickOfsuggstion = {OnClickOfsuggstion} setTerm = {setTerm}  listItem={item}/></Link>)}
      </div>}
         
    </div>
  )
}

export default YTSearch
