# Generated by Django 3.1.6 on 2021-02-16 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('body', models.TextField(max_length=5000)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('body', models.TextField(max_length=5000)),
            ],
        ),
    ]
