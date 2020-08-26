FROM python:3

ENV PYTHOUNUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN pip install --upgrade pip &&  pip install -r requirements.txt && rm -rf venv && rm -rf staj-project-flask

#WORKDIR /staj/books 
#RUN rm -rf migrations && mkdir migrations 
#WORKDIR /migrations
#RUN touch __init__.py

#WORKDIR /app/staj/comment
#RUN rm -rf migrations && mkdir migrations
#WORKDIR /app/staj/comment/migrations
#RUN touch __init__.py

#WORKDIR /app/staj/libary
#RUN rm -rf migrations && rm -rf __pycache__ && mkdir migrations
#WORKDIR /app/staj/libary/migrations
#RUN touch __init__.py

#WORKDIR /app/staj


EXPOSE 8000

