FROM python:3.11-slim

WORKDIR /app

# 필요한 시스템 패키지 설치 (libmariadb-dev 및 gcc 포함)
RUN apt-get update && apt-get install -y \
    pkg-config \
    libmariadb-dev \
    default-mysql-client \
    redis-tools \
    gcc

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
