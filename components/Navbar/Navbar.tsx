import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container } from 'semantic-ui-react';
import { Avocado } from '@components/SVGIcons';
import ShoppingCartIcon from './ShoppingCartIcon';
import { useCart } from '@store/Cart/Cart';

const Navbar = () => {
  const { pathname } = useRouter();
  const { count: cartCount } = useCart();

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Fresh fruits Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>

      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
          background-color: green;
        }

        .ui.menu
        .item {
          color: white;
          padding: 5px 10px;
        }

        .ui.menu
        .active.item {
          background-color: gray;
          color: white;
        }

        .ui.pointing.menu
        .active.item:after {
          background-color: gray;
        }

        .ui.menu
        .active.item:hover,
        .ui.vertical.menu
        .active.item:hover {
          background-color: rgba(0,0,0,.05);
          color: white;
        }

        .ui.input>input {
          max-width: 55%;
        }

        .ui.text.container p{
          text-align: justify;
        }

        @media (max-width: 767px) {
        .right.menu {
          width: 100%;
        }

      `}</style>
    </Menu>
  );
};

export default Navbar;
