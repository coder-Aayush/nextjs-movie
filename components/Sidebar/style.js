import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid rgba(84, 110, 122, 0.2);
  padding: 20px 20px 20px 20px;
  flex: 1;

  h2 {
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    margin: 0px 0px 1rem 1rem;
  }
`;

export const GenreContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionLink = styled.a`
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  outline: currentcolor none medium;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;

  .link {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
    opacity: 0.6;
    color: var(--color-primary-light);
    border: ${({ selected }) =>
      selected ? "1px solid var(--color-primary)" : "1px solid transparent"};
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }

  .link:hover {
    border: 1px solid var(--color-primary-light);
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const SvgContainer = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 3rem;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: contain;
  }
`;
