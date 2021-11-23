import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import Layout from '@components/Layout/Layout';

const avoFacts = [
  {
    title: 'Most of the fruits come from Mexico.',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa mollitia nihil perspiciatis nisi velit esse error aut porro? Temporibus pariatur aliquam similique sequi necessitatibus, quam deleniti hic inventore magnam.',
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem pariatur ut quidem repellendus quaerat! Quaerat iusto impedit quidem nam pariatur saepe sunt excepturi, mollitia cumque voluptate voluptas modi eos qui?',
  },
  {
    title: 'It wasn’t his original name.',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis consequuntur qui nulla placeat sunt est vel, autem enim hic velit voluptas suscipit, ad dicta quo fugit alias. Dolore, distinctio magnam.',
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eius? Magni suscipit, quod quasi delectus corporis nemo beatae architecto doloremque perspiciatis tenetur neque porro eveniet eum cupiditate, perferendis ratione! Nulla.',
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas unde iusto quaerat qui blanditiis provident impedit, fuga ullam deserunt, nostrum asperiores neque, voluptate repellat tenetur aut beatae facere quisquam.',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
        Interesting information
        </Header>
        <figure>
          <Image src="https://images.pexels.com/photos/4838747/pexels-photo-4838747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="fruits" />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="#"
            >
              lorem
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }

        figcaption {
          margin-top: 0.5rem;
          font-size: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          counter-reset: orderedlist;
        }

        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }

        h3:first-child {
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage;
