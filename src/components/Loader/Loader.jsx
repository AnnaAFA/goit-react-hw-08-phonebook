import { LoaderStyle } from './Loader.styled';

const { Oval } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <LoaderStyle>
      <Oval
        height={70}
        width={70}
        color="#8b59e7"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4ec7e6"
        strokeWidth={3}
        strokeWidthSecondary={2}
      />
    </LoaderStyle>
  );
};

// #8b59e7
// #4ec7e6
