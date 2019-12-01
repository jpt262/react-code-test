import React, {useState} from 'react'
import Lottie from 'react-lottie';

const Loading = () => {
  const localStorageData = localStorage.getItem('loadingAnimation')
  const parsedLocalStorage = localStorageData ? JSON.parse(localStorageData) : null
  const [animationData, setAnimationData] = useState(parsedLocalStorage)
  const [segments, setSegments] = useState([480, 240])
  if (!animationData) {
    fetch('/loading-animation.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data)
        localStorage.setItem('loadingAnimation', JSON.stringify(data))
      })
  }


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="center-text">
      <p>Loading</p>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        speed={2.5}
        segments={segments}
        direction={-1}/>
    </div>
)}

export default Loading
