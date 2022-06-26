import { NovuProvider, PopoverNotificationCenter, NotificationBell } from '@novu/notification-center';
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  function onNotificationClick(notification) {
    navigate(notification.cta.data.url);
  }

  return (
    <div className="notify">
      <NovuProvider subscriberId={'murtuza1290'} applicationIdentifier={'uiklkqKaZG6X'}>
        <PopoverNotificationCenter colorScheme={'dark'} onNotificationClick={onNotificationClick}>
          {({ unseenCount, theme }) => <NotificationBell unseenCount={unseenCount} theme={theme} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    </div>
  );
}

export default Home;
