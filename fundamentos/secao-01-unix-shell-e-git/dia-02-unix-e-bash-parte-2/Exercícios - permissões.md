##### Crie a pasta unix_tests_permissions e navegue até ela.

- S= ~/Documentos/trybe/unix_tests$ mkdir unix_tests_permissions && cd unix_tests_permissions

##### Rode o comando ls -l e veja quais as permissões dos arquivos.

- S= ~/Documentos/trybe/unix_tests/unix_tests_permissions$ ls -l
total 0

##### Crie o arquivo arquivo_teste.txt.

- S= ~/Documentos/trybe/unix_tests/unix_tests_permissions$ touch arquivo_teste.txt

##### Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
    Resultado esperado:-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

- S= ~/Documentos/trybe/unix_tests/unix_tests_permissions$ chmod 666 arquivo_teste.txt
    ~/Documentos/trybe/unix_tests/unix_tests_permissions$ ls -l
    total 0
    -rw-rw-rw- jan 15 23:04 arquivo_teste.txt

##### Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;
    Resultado esperado:-r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

- S= ~/Documentos/trybe/unix_tests/unix_tests_permissions$ chmod 444 arquivo_teste.txt
    ~/Documentos/trybe/unix_tests/unix_tests_permissions$ ls -l
    total 0
    -r--r--r-- jan 15 23:04 arquivo_teste.txt


##### Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.
    Resultado esperado:-rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

- S= ~/Documentos/trybe/unix_tests/unix_tests_permissions$ chmod 644 arquivo_teste.txt
    ~/Documentos/trybe/unix_tests/unix_tests_permissions$ ls -l
    total 0
    -rw-r--r-- jan 15 23:04 arquivo_teste.txt
