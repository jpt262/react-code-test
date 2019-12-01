import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Lottie from 'react-lottie';

const Error = ({message}) => {
  const localStorageData = localStorage.getItem('errorAnimation')
  const parsedLocalStorage = localStorageData ? JSON.parse(localStorageData) : null
  const [animationData, setAnimationData] = useState(parsedLocalStorage)
  if (!animationData) {
    fetch('/error-animation.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data)
        localStorage.setItem('errorAnimation', JSON.stringify(data))
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
    <div className="animated fadeIn center-text">
      <p>{message}</p>
      <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={false}
      isPaused={false}/>
      <Button variant="contained" onClick={() => window.location.reload()}>Try again</Button>
    </div>
)}

export default Error
