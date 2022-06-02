from django.db import models
from django.contrib.auth.models import User

class AddYarnDetailed(models.Model):
    name = models.CharField(max_length=50)
    fiber_type = models.CharField(max_length=50, blank=True)
    colorway = models.CharField(max_length=50, blank=True)
    yardage = models.PositiveIntegerField(blank=True)
    yarn_weight = models.CharField(max_length=20, blank=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    notes = models.CharField(max_length=50, blank=True)
    def __str__(self):
        return f'{self.username}_{self.brand}_{self.name}'
    class Meta:
        verbose_name_plural = 'Yarn'

class AddYarnBasic(models.Model):
    ...

class AddHook(models.Model):
    size = models.CharField(max_length=10)
    brand = models.CharField(max_length=50)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f'{self.username}_{self.size}_hook'
    class Meta:
        verbose_name_plural = 'Hooks'

class AddNeedle(models.Model):
    size = models.PositiveIntegerField() # US size
    length = models.PositiveIntegerField() # in inches
    brand = models.CharField(max_length=50)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f'{self.username}_US{self.size}_needles'
    class Meta:
        verbose_name_plural = 'Needles'
