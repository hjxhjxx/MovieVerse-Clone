# Generated by Django 3.2 on 2024-06-19 06:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movieverse', '0004_auto_20240619_0615'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='movie',
            table='moviemetadatas',
        ),
        migrations.AlterModelTable(
            name='person',
            table='personmetadatas',
        ),
    ]