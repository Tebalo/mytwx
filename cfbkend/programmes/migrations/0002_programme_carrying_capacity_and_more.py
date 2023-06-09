# Generated by Django 4.2 on 2023-04-24 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programmes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='programme',
            name='carrying_capacity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='programme',
            name='number_of_applicants',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='programme',
            name='qualifying_criteria',
            field=models.TextField(default='{}'),
        ),
    ]
