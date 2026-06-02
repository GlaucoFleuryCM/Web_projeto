import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Card from './Card'
import './card.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const currentStatus = slides[selectedIndex]?.status || 'Disponível';

  const getThemeClass = (status) => {
    switch (status) {
      case 'Indisponível':
      case 'Em uso':
        return 'status-em-uso';
      case 'Manutenção':
        return 'status-manutencao';
      case 'Disponível':
        return 'status-disponivel';
      default:
        return '';
    }
  };

  return (
    <div className="container-embla">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                  <Card data={slide} />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => {
          const slideStatus = slides[index]?.status || 'Disponível';
          const dotColorClass = getThemeClass(slideStatus);

          const modelo = slides[index]?.modelo || '---';
          const placa = slides[index]?.placa || '---';
          
          const tooltipText = `Modelo: ${modelo} - Placa: ${placa}`;

          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${dotColorClass} ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
              title={tooltipText}
            />
          );
        })}
      </div>
    </div>
  )
}

export default EmblaCarousel