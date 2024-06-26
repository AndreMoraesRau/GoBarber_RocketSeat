import styled from 'styled-components';

import { shade } from 'polished';
import { HTMLAttributes } from 'react';

interface AppointmentProps {
  key: string;
}

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
  }

  strong {
    color: #f49000;
  }

  a {
    text-decoration: none;
    color: #ff9000;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background-color: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.div<AppointmentProps>`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;
    width: 70px;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }

  ${({ ...rest }) => rest}
` as React.ComponentType<AppointmentProps & HTMLAttributes<HTMLDivElement>>;

export const Calendar = styled.aside`
  width: 380px;

  .rdp {
    background: #28262e;
    border-radius: 10px;
  }

  .rdp-wrapper {
    padding-bottom: 0;
  }

  .rdp,
  .rdp-month {
    width: 100%;
    max-width: 600px;
  }

  .rdp-month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .rdp-day {
    width: 40px;
    height: 40px;
    margin: 2px;
  }

  .rdp-day:not(.rdp-day_outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .rdp:not(.rdp--interactionDisabled)
    .rdp-day:not(.rdp-day_selected):not(.rdp-day_outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .rdp-day_disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .rdp-day_selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }

  .rdp-day_today {
    font-weight: normal;
    color: red !important;
    opacity: 1 !important;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;

    .rdp {
      margin-bottom: 42px;
    }
  }
`;
