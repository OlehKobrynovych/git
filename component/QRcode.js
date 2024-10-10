// https://www.npmjs.com/package/react-qr-scanner
//https://www.npmjs.com/package/@yudiel/react-qr-scanner
// https://www.npmjs.com/package/html5-qrcode

// дозвіл на використання камери
//navigator.mediaDevices.getUserMedia({audio: true, video: true})

Створення QR коду 
https://www.youtube.com/watch?v=Kr6Pn4rr4Kk&list=PLOQDek48BpZG0kpcUAoy5Z5ZvZN1HYt3Z&index=6
https://github.com/kazuhikoarase/qrcode-generator/tree/master/js



import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';
import './BarcodeScanner.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchBarcode } from '../../store/userSlice';

//https://www.npmjs.com/package/quagga


const BarcodeScanner = ({setIsScanner, isScanner, closeModal}) => {
    const user = useSelector(state => state.userSlice.user);
    const videoRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        return () => stopScan()
    }, [])

    const handleScan = (result) => {
      console.log(result.codeResult.code);
      if (result.codeResult.code) {
        dispatch(setSearchBarcode(result.codeResult.code))
        navigate(`/auth/${user._id}/product`)
        closeModal()
      }
    }
  
    const startScan = () => {
        setIsScanner(true)
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: videoRef.current,
          constraints: {
            facingMode: 'environment',
          },
        },
        decoder: {
          readers: ['ean_reader'],
        },
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });
  
      Quagga.onDetected(handleScan);
    }
  
    const stopScan = () => {
      Quagga.stop();
    //   setIsScanner(false)
    }
  
    return (
      <div className={`barcode-scanner ${!isScanner ? 'barcode-scanner-none' : ''}`}>
        <button className='barcode-scanner__btn' onClick={startScan}>Start Scan</button>
        <button className='barcode-scanner__btn' onClick={stopScan}>Stop Scan</button>
        <div ref={videoRef}></div>
        {/* <video ref={videoRef} style={{ width: '100%', height: 'auto' }}></video> */}
      </div>
    );
  }
  
export default BarcodeScanner;


