import Image from "next/image";
import styles from "./page.module.css";
import {styled} from 'next-yak';
import {CrossRefComp} from "@/app/CrossRefComp";
import {CrossRefStyled} from "@/app/CrossRefStyled";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <HeadingLiteral $bgColor='blue'>
          HeadingLiteral
        </HeadingLiteral>
        <CrossRefComp>
          <HeadingLiteral $bgColor='green'>
            HeadingLiteral wrapped in CrossRefComp
          </HeadingLiteral>
        </CrossRefComp>

        <CrossRefStyled>
          <HeadingLiteral $bgColor='cyan'>
            HeadingLiteral wrapped in CrossRefStyled
          </HeadingLiteral>
        </CrossRefStyled>

        <div className='parent-container'>

          <HeadingLiteral $bgColor='#005f6b'>
            HeadingLiteral wrapped in .parent-container
            <span className='child-item'>
              &nbsp; .child-item inside HeadingLiteral
            </span>
          </HeadingLiteral>
        </div>

        <HeadingLiteral className='shadow-variant' $bgColor='grey'>
          HeadingLiteral wrapped in .parent-container
          <span className='child-item'>
              &nbsp; .child-item inside HeadingLiteral
            </span>
        </HeadingLiteral>


        <span className='child-item'>
          .child-item outside HeadingLiteral
        </span>

        <div className='shadow-variant'>
          .shadow-variant unrelated to HeadingLiteral
        </div>

      </header>

      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

const HeadingLiteral = styled.h2<{$bgColor: string}>`
  background-color: ${({$bgColor}) => $bgColor};

  ${CrossRefStyled} & {
    color: purple;
  }

  &:global(.shadow-variant) {
    padding: 15px 10px;
    box-shadow: 5px 5px 10px 0 yellow;
  }

  & :global(.child-item) {
    color: red;
  }
  
  :global(.parent-container) & {
    font-size: 30px;
  }

  &:hover {
    font-size: 40px;
  }

`