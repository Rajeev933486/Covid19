# Generated by Django 4.1.6 on 2024-06-05 09:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0025_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='calltime',
            field=models.TimeField(blank=True, default=datetime.date.today, null=True),
        ),
    ]
