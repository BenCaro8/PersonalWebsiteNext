"use client";
import { FC, useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import AnimatedBackground from '../../lib/components/AnimatedBackground';
import Section from '../../lib/components/Section';
import Title from '../../lib/components/Title';
import { useAppSelector, useAppDispatch } from '../../lib/store';
import {
  setColors,
  resetToDefaultTheme,
  setNumShapes,
} from '../../lib/slices/settingsSlice';
import { ColorState } from '../../lib/utils/helpers';

const Themes: FC = () => {
  const isMobile = useAppSelector((state) => state.settings.isMobile);
  const colors = useAppSelector((state) => state.settings.colors);
  const numShapes = useAppSelector((state) => state.settings.numShapes);
  const [inputValue, setInputValue] = useState(numShapes.toString());
  const dispatch = useAppDispatch();

  const onColorChange = (color: ColorResult, property: keyof ColorState) => {
    dispatch(setColors({ [property]: color.hex }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      /^\d*$/.test(value) &&
      (parseInt(value) || 1) <= (isMobile ? 35 : 100)
    ) {
      setInputValue(value);
    }
  };

  const handleApplyClick = () => {
    const newCount = parseInt(inputValue);
    if (!isNaN(newCount)) {
      dispatch(setNumShapes(newCount));
    }
  };

  useEffect(() => {
    setInputValue(numShapes.toString());
  }, [numShapes]);

  return (
    <>
      <Section backgroundColor="primary-accent-color" height={200}>
        <Title fontFamily="Gugi" size="medium">
          Themes:
        </Title>
      </Section>
      <Section flexCol showAnimatedBackground>
        <div className="text-white mt-10 mb-10">
          <div className="text-white mb-2">Background Color:</div>
          <ChromePicker
            color={colors['--primary-bg-color']}
            onChange={(color) => onColorChange(color, '--primary-bg-color')}
          />
        </div>
        <div className="text-white mt-10 mb-10">
          <div className="text-white mb-2">Accent Color:</div>

          <ChromePicker
            color={colors['--primary-accent-color']}
            onChange={(color) => onColorChange(color, '--primary-accent-color')}
          />
        </div>
        <div className="text-white mt-10 mb-10">
          <div className="text-white mb-2">Second Accent Color:</div>

          <ChromePicker
            color={colors['--secondary-accent-color']}
            onChange={(color) =>
              onColorChange(color, '--secondary-accent-color')
            }
          />
        </div>
        <div className="mb-10">
          <div className="text-white flex flex-col mb-2">
            Number of Background Shapes:
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className=" pl-2"
          />
          <button onClick={handleApplyClick} className="text-white ml-2">
            Apply
          </button>
        </div>
        <div className="mb-10">
          <button
            onClick={() => dispatch(resetToDefaultTheme())}
            className="text-white ml-2"
          >
            Reset
          </button>
        </div>
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Themes;
