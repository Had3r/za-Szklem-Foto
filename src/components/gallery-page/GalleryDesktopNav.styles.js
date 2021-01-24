import styled from 'styled-components';
import tw from 'twin.macro';

export const NavList = styled.ul`
  ${tw`text-center`};
`;

export const NavItem = styled.li`
  ${tw`inline-block`};
`;

export const NavButton = styled.button`
  ${tw`rounded-sm`};
`;

export const Container = styled.div`
  ${tw`container hidden invisible md:visible md:block`};
`;
