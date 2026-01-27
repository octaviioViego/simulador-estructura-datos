export const IntroduccionOrdenamiento = () => {
    return (
        <section>
            <h1>¿Qué es un algoritmo de ordenación?</h1>
            <p>
                Los algoritmos de ordenación son un conjunto de instrucciones que toman un
                arreglo o lista como entrada y organizan los elementos en un orden particular.

                Las ordenaciones suelen ser numéricas o una forma de orden alfabético (o lexicográfico),
                y pueden ser en orden ascendente (AZ, 0-9) o descendente (ZA, 9-0).
            </p>
            <h1>¿Por qué los algoritmos de ordenación son importantes?</h1>
            <p>
                Dado que a menudo pueden reducir la complejidad de un problema,
                los algoritmos de ordenación son muy importantes en informática.
                Estos algoritmos tienen aplicaciones directas en algoritmos de búsqueda,
                algoritmos de bases de datos, métodos divide y vencerás, algoritmos de estructura
                de datos y muchos más.
            </p>
            <h1>¿Compensaciones de los algoritmos de ordenación?</h1>
            <p>
                Al elegir un algoritmo de ordenación, se deben hacer algunas preguntas:
            </p>
            <ul>
                <li>¿Cuán grande es la colección que se ordena?</li>
                <li>¿Cuánta memoria hay disponible?</li>
                <li>¿La colección necesita crecer?</li>
            </ul>
            <p>
                Las respuestas a estas preguntas pueden determinar qué algoritmo funcionará
                mejor para cada situación. Algunos algoritmos como la ordenación por combinación
                pueden necesitar mucho espacio o memoria para ejecutarse, mientras que la ordenación
                por inserción no siempre es la más rápida, pero no requiere muchos recursos para ejecutarse.
                Debes determinar cuáles son tus requisitos y considerar las limitaciones de tu sistema antes
                de decidir qué algoritmo de ordenación usar.
            </p>
        </section>
    );
}