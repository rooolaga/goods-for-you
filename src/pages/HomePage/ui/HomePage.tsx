import cls from './HomePage.module.scss';
import { Text } from '@/shared/ui/Text';
import clsx from 'clsx';
import { Cite } from '@/shared/ui/Cite';
import { Button } from '@/shared/ui/Button';
import { Accordion, AccordionList } from '@/shared/ui/Accordion';
import { Catalog } from '@/widgets/Catalog';
import { Team } from '@/entities/Team';
import { MainLayout } from '@/widgets/MainLayout/ui/MainLayout';

import hero from '@/data/Hero.json'
import about from '@/data/About.json'
import team from "@/data/Team.json"
import faq from "@/data/FAQ.json"
import { QuizRecommend } from "@/features/QuizRecommend";
import { Quiz } from "@/widgets/Quiz/ui/Quiz";

export const HomePage = () => {
  return (
    <MainLayout>

      <section className={clsx('section_purple', cls.section_hero)}>
        <div className={clsx("container", cls.hero_container)}>
          <Text as='h1' color='white' className='mb-4'>{hero.title}</Text>
          <Text as='p' color='white' weight='semibold'>{hero.text}</Text>
          <Button size='l' className='ml-4 mt-9'>{hero.button}</Button>
        </div>
      </section>

      <section className='pt-13 pb-13' id="catalog">
        <div className="container">
          <Text as='h2' weight='bold' className='mb-8'>Catalog</Text>
          <Catalog />
        </div>
      </section>

      <section className={clsx('section_purple', cls.section_about)} id="about">
        <div className={clsx('container', cls.about_container)}>
          <div className={clsx(cls.about_content, 'pl-1')}>
            <Text as='h2' color='white' weight='bold' className='mb-2'>
              {about.title}
            </Text>
            <Cite author={about.author} color='white'>
              {about.text}
            </Cite>
          </div>
          <div>
            <img src={about.img.src} alt={about.img.alt} loading="lazy"/>
          </div>
        </div>
      </section>

      <section className='pt-15 pb-15' id="product_selection">
        <div className="container">
          <Quiz />
        </div>
      </section>

      <section className={clsx('section_purple', cls.section_team)} id="team">
        <div className="container">
          <Team items={team.teammates} title={team.title} />
        </div>
      </section>

      <section id="faq">
        <div className={clsx("container", cls.faq_container)}>
          <Text as='h2' weight='bold' className={cls.faq_title}>{faq.title}</Text>
          <AccordionList>
            <Accordion title={faq.accordionOne.title}>
              <Text as='p' color='gray' weight='semibold'>
                {faq.accordionOne.text}
              </Text>
            </Accordion>
            <Accordion title={faq.accordionTwo.title}>
              <Text as='p' color='gray' weight='semibold'>
                {faq.accordionTwo.text}
              </Text>
            </Accordion>
          </AccordionList>
        </div>
      </section>

    </MainLayout>
  );
}
