#!/bin/bash
cd ~/apps/header_footer
for n in {1..61}
do
        if [ `docker-compose ps | grep -E 'header_footer' | grep Up | wc -l` -eq 1 ]
        then
                echo $n "docker header_footer is Up"
        exit 0
        else
               exit 1
        fi
        sleep 1
done
exit 0
