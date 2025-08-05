import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from './animations/loginAnimation.json';
import loaderAnimation from './animations/loaderAnimation.json'
import menuAnimation from './animations/menuAnimation.json'

export const LoginAnimation: React.FC = () => {
  return (
    <div style={{ width: '200px', height: '200px', margin: 'auto' }}>
      <Lottie
        animationData={loginAnimation}
        loop={true}
      />
    </div>
  );
};


export const LoaderAnimation: React.FC = () => {
  return (
    <div style={{ width: '100px', height: '100px', margin: 'auto' }}>
      <Lottie
      animationData={loaderAnimation}
      loop={true}
    />
    </div>
  );
}


export const MenuAnimation: React.FC = () => {
  return (
    <div style={{ width: '50px', height: '60px', margin: 'auto' }}>
      <Lottie
      animationData={menuAnimation}
      loop={true}
    />
    </div>
  );
}
