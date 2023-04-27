# Generated by Django 4.2 on 2023-04-25 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('candidate_id', models.CharField(max_length=255)),
                ('center_numbr', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('status', models.CharField(default='pending', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('subjects', models.TextField(default='{}')),
            ],
            options={
                'verbose_name_plural': 'candidates',
            },
        ),
    ]