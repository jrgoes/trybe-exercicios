##### Crie a pasta unix_tests_skills e navegue até ela.

- S= ~/Documentos/trybe/unix_tests$ mkdir unix_tests_skills && cd unix_tests_skills

##### Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ cat >> skills2.txt
    Internet
    Unix
    Bash
    ^C

##### Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ cat >> skills2.txt
    Python
    Java
    Sql
    Javascript
    Ruby
    ^C

   ~/Documentos/trybe/unix_tests/unix_tests_skills$ sort < skills2.txt
    Bash
    Internet
    Java
    Javascript
    Python
    Ruby
    Sql
    Unix

##### Conte quantas linhas tem o arquivo skills2.txt.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ wc -l skills2.txt

##### Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ sort < skills2.txt | head -n 3 > top_skills.txt

##### Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ cat >> phrases2.txt
    What Goes Up Must Come Down
    Know the Ropes
    Happy as a Clam
    Cry Over Spilt Milk
    ^C

##### Conte o número de linhas que contêm as letras br.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ grep -i  br phrases2.txt | wc -l
    2

##### Conte o número de linhas que não contêm as letras br.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ grep -v  -i  br phrases2.txt | wc -l
    4

##### Adicione dois nomes de países ao final do arquivo phrases2.txt.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ cat >> phrases2.txt
    Vanuatu
    Chile
    ^C

##### Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ cp ~/Documentos/trybe/unix_tests/unix_tests_search/countries.txt bunch_of_things.txt

   ~/Documentos/trybe/unix_tests/unix_tests_skills$ cat phrases2.txt >> bunch_of_things.txt

##### Ordene o arquivo bunch_of_things.txt.

- S= ~/Documentos/trybe/unix_tests/unix_tests_skills$ sort bunch_of_things.txt -o bunch_of_things.txt
