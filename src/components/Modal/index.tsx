import { IoMdClose } from 'react-icons/io';

import { Container, ContentContainer, Title, CloseContainer } from './styles';
import { IModalProps } from './types';

export const Modal = ({
  isActive,
  setIsActive,
  title,
  children,
  canClose,
}: IModalProps): JSX.Element => {
  function handleClose() {
    if (setIsActive) {
      setIsActive(false);
    }
  }

  return (
    <Container data-testid="Modal" isActive={isActive}>
      <ContentContainer>
        {canClose && (
          <CloseContainer>
            <IoMdClose size={24} onClick={handleClose} />
          </CloseContainer>
        )}
        <Title>{title}</Title>

        {children}
      </ContentContainer>
    </Container>
  );
};
