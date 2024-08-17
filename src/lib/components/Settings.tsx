import { FC, ReactNode, useState } from 'react';
import Section from './Section';
import Title from './Title';
import styles from './styles/Settings.module.scss';

type SettingsOption = {
  label: string;
  component?: ReactNode;
  url?: string;
};

const settingsOptions: SettingsOption[] = [{ label: 'Themes', url: '/themes' }];

type Props = {
  onClose: () => void;
};

const Settings: FC<Props> = ({ onClose }) => {
  const [selectedSettingsPage, setSelectedSettingsPage] =
    useState<ReactNode | null>(null);

  const settingsDefault = (
    <>
      <Section backgroundColor="white" height={70} divisionBar>
        <Title size="small" color="black">
          Settings:
        </Title>
      </Section>
      <Section backgroundColor="white" flexCol>
        {settingsOptions.map((option, index) => {
          if (option?.component) {
            return (
              <a
                key={index}
                className={styles.settingsOption}
                onClick={() => setSelectedSettingsPage(option.component)}
              >
                {option.label}
                <svg viewBox="0 0 24 24" height="20px" width="20px">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="black"
                  />
                </svg>
              </a>
            );
          }
          if (option?.url) {
            return (
              <a
                key={index}
                className={styles.settingsOption}
                onClick={onClose}
                href={option.url}
              >
                {option.label}
                <svg viewBox="0 0 24 24" height="20px" width="20px">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="black"
                  />
                </svg>
              </a>
            );
          }
        })}
      </Section>
    </>
  );

  return selectedSettingsPage || settingsDefault;
};

export default Settings;
