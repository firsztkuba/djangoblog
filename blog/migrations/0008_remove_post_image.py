# Generated by Django 4.1 on 2022-09-05 07:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_post_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='image',
        ),
    ]
