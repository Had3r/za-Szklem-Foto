import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`container text-center mb-12 md:mb-20 lg:mb-32`};

  a {
    ${tw`mx-auto `}
  }
`;

export const ErrorCode = styled.div`
  ${tw`font-semibold tracking-widest text-secondary`};
  font-size: 8rem;

  background: linear-gradient(to bottom, #fff, rgba(222, 112, 6, 0.2), #eee),
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzQwMCcgaGVpZ2h0PSc0MDAnPgoJPGRlZnMgaWQ9J2RlZnM0Jz4KCQk8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQicgaWQ9J2ZpbHRlcjMxMTUnPgoJCQk8ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgbnVtT2N0YXZlcz0nMScgYmFzZUZyZXF1ZW5jeT0nMC45JyBpZD0nZmVUdXJidWxlbmNlMzExNycgLz4KCQkJPGZlQ29sb3JNYXRyaXggcmVzdWx0PSdyZXN1bHQ1JyB2YWx1ZXM9JzEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDYgLTMuNzUgJyBpZD0nZmVDb2xvck1hdHJpeDMxMTknIC8+CgkJCTxmZUNvbXBvc2l0ZSBpbjI9J3Jlc3VsdDUnIG9wZXJhdG9yPSdpbicgaW49J1NvdXJjZUdyYXBoaWMnIHJlc3VsdD0ncmVzdWx0NicgaWQ9J2ZlQ29tcG9zaXRlMzEyMScgLz4KCQkJPGZlTW9ycGhvbG9neSBpbj0ncmVzdWx0Nicgb3BlcmF0b3I9J2RpbGF0ZScgcmFkaXVzPScxMCcgcmVzdWx0PSdyZXN1bHQzJyBpZD0nZmVNb3JwaG9sb2d5MzEyMycgLz4KCQk8L2ZpbHRlcj4KCTwvZGVmcz4KCTxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIHg9JzAnIHk9JzAnIGlkPSdyZWN0Mjk4NScgZmlsbD0nI2VlZWVlZScvPiAgICAgCgk8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4PScwJyB5PScwJyBpZD0ncmVjdDI5ODUnIHN0eWxlPSdmaWxsOiNlMDg3Mjg7ZmlsdGVyOnVybCgjZmlsdGVyMzExNSknIC8+Cjwvc3ZnPg==);

  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  div {
    ${tw`leading-normal`}
  }
`;
