##### Crie um novo diretório chamado unix_tests_search e entre nele. 

-   S= ~/Documentos/trybe/unix_tests$ mkdir unix_tests_search
      ~/Documentos/trybe/unix_tests$ cd unix_tests_search
      
##### Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

##### Mostre todo o conteúdo do arquivo countries.txt na tela.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ cat countries.txt

##### Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ more countries.txt

##### Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
 
-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ more countries.txt /Zambia

##### Busque por Brazil no countries.txt.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ grep Brazil countries.txt
      Brazil

##### Busque novamente por brazil, mas agora utilizando o lower case.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ grep i- brazil countries.txt
      Brazil

##### Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ touch phrases.txt
      ~/Documentos/trybe/unix_tests/unix_tests_search$ cat >> phrases.txt
      You Can't Teach an Old Fox New Tricks
      
      Fox's breakfast

      Keep body and soul together

      High and mighty

      Middle of the road
      ^C

##### Busque pelas frases que não contenham a palavra fox.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ grep -v Fox phrases.txt
      Keep body and soul together

      High and mighty

      Middle of the road

##### Conte o número de palavras do arquivo phrases.txt.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ wc -w phrases.txt
      22 phrases.txt

##### Conte o número de linhas do arquivo phrases.txt.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ wc -l phrases.txt
      9 phrases.txt

##### Crie os arquivos empty.tbt e empty.pdf.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ touch empty.tbt empty.pdf
   
##### Liste todos os arquivos do diretório unix_tests_search.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ ls -l
      -rw-rw-r-- jan 14 20:20 countries.txt
      -rw-rw-r-- jan 14 21:28 empty.pdf
      -rw-rw-r-- jan 14 21:28 empty.tbt
      -rw-rw-r-- jan 14 21:18 phrases.txt

##### Liste todos os arquivos que terminem com txt.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ ls -l *txt
      -rw-rw-r--  jan 14 20:20 countries.txt
      -rw-rw-r--  jan 14 21:18 phrases.txt

##### Liste todos os arquivos que terminem com tbt ou txt.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ ls -l *t*t
      -rw-rw-r-- jan 14 20:20 countries.txt
      -rw-rw-r-- jan 14 21:28 empty.tbt
      -rw-rw-r-- jan 14 21:18 phrases.txt


##### Acesse o manual do comando ls.

-   S= ~/Documentos/trybe/unix_tests/unix_tests_search$ man ls

