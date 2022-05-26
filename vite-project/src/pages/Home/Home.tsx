type HomeProps = {
    text: string;
}

export function Home(props: HomeProps) {
    return(
        <p>{props.text}</p>
    );
}