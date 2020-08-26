FROM python:3

RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN pip install --upgrade pip && pip install -r requirments.txt && rm -rf venv

EXPOSE 5000
