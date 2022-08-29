import styled, { keyframes } from 'styled-components';

const BlobAnimation = () => {
  return (
    <div>
      {/* <Blob /> */}
      ;<Blob2 />
    </div>
  );
};

const move = keyframes`
from{
    transform: translate(-1000px, -50px) rotate(-90deg);
    border-radius: 24% 76% 75% 65% / 27% 36% 64% 73%;

}

to{
    transform: translate(0px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;

}`;

// animation 2

const move2 = keyframes`
from{
    transform: translate(500px, 0px) rotate(-90deg);
    border-radius: 51% 34% 21% 65% / 34% 32% 22% 65%;

}

to{
    transform: translate(400px, 100px) rotate(-120deg);
    border-radius: 54% 54% 35% 67% / 68% 55% 45% 72%;

}`;

const Blob = styled.div`
  z-index: 0;
  filter: blur(100px);
  position: absolute;
  width: 400px;
  height: 400px;
  background: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.4) 31.77%,
    #9eecd9 100%
  );
  mix-blend-mode: normal;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  animation: ${move} 10s infinite alternate;

  :hover {
    width: 520px;
    height: 520px;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

    box-shadow: inset 0 0 0.5px rgba(255, 255, 255, 0.6), 
    inset: 100px 100px 0 0px #fa709a, inset 208px 200px 0 0px #784ba0,
    inset: 300px 300px 0 0px #2b86c5;
  }
`;

const Blob2 = styled(Blob)`
  background: linear-gradient(
    180deg,
    rgba(186, 115, 255, 0.5) 26%,
    #3913b8 100%
  );
  animation: ${move2} 30s infinite alternate;
`;

export default BlobAnimation;
