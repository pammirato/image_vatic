sudo apt-get install -y git python-setuptools python-dev libavcodec-dev libavformat-dev libswscale-dev libjpeg62 libjpeg62-dev libfreetype6 libfreetype6-dev apache2 libapache2-mod-wsgi mysql-server mysql-client libmysqlclient-dev gfortran 

sudo easy_install -U SQLAlchemy wsgilog pil mysql-python munkres parsedatetime argparse
sudo easy_install -U numpy
sudo pip install cython==0.20

git clone https://github.com/weiliu89/turkic.git
git clone https://github.com/cvondrick/pyvision.git
git clone https://github.com/weiliu89/vatic.git

cd turkic
sudo python setup.py install
cd ..

cd pyvision
sudo python setup.py install
cd ..

echo "*****************************************************"
echo "*** Please consult README to finish installation. ***"
echo "*****************************************************"
